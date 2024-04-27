package com.example.controller;


import com.example.constants.ResourceName;
import com.example.constants.SearchFields;
import com.example.dto.donthu.DonThuRequest;
import com.example.dto.donthu.DonThuResponse;
import com.example.dto.kehoach.KeHoachRequest;
import com.example.dto.kehoach.KeHoachResponse;
import com.example.dto.tree.CayXanhRequest;
import com.example.dto.tree.CayXanhResponse;
import com.example.dto.user.NguoiDungRequest;
import com.example.dto.user.NguoiDungResponse;
import com.example.entity.Cay;
import com.example.entity.KeHoach;
import com.example.entity.NguoiDung;
import com.example.entity.ThongTinNguoiDanPhanAnh;
import com.example.mapper.CayMapper;
import com.example.mapper.DonThuMapper;
import com.example.mapper.KeHoachMapper;
import com.example.mapper.NguoiDungMapper;
import com.example.repository.CayRepo;
import com.example.repository.DonThuRepo;
import com.example.repository.KeHoachRepo;
import com.example.repository.NguoiDungRepo;
import com.example.service.CrudService;
import com.example.service.GenericService;
import com.fasterxml.jackson.databind.JsonNode;
import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import org.springframework.context.ApplicationContext;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.method.RequestMappingInfo;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;
import org.springframework.web.util.pattern.PathPatternParser;

import java.util.List;

@Component
@AllArgsConstructor
public class GenericMappingRegister {
    private ApplicationContext context;
    private RequestMappingHandlerMapping handlerMapping;

    // controllers
    private GenericController<NguoiDungRequest, NguoiDungResponse> userController;
    private GenericController<CayXanhRequest, CayXanhResponse> cayXanhController;
    private GenericController<KeHoachRequest, KeHoachResponse> keHoachController;
    private GenericController<DonThuRequest, DonThuResponse> donThuController;

    // services
    private GenericService<NguoiDung, NguoiDungRequest, NguoiDungResponse> userService;
    private GenericService<Cay, CayXanhRequest, CayXanhResponse> cayXanhService;
    private GenericService<KeHoach, KeHoachRequest, KeHoachResponse> keHoachService;
    private GenericService<ThongTinNguoiDanPhanAnh, DonThuRequest, DonThuResponse> donThuService;

    @PostConstruct
    public void registerControllers() throws NoSuchMethodException {

        register("nguoi-dung", userController, userService.init(
                context.getBean(NguoiDungRepo.class),
                context.getBean(NguoiDungMapper.class),
                SearchFields.NGUOI_DUNG,
                ResourceName.NGUOI_DUNG
        ), NguoiDungRequest.class);

        register("cay-xanh", cayXanhController, cayXanhService.init(
                context.getBean(CayRepo.class),
                context.getBean(CayMapper.class),
                SearchFields.NGUOI_DUNG,
                ResourceName.NGUOI_DUNG
        ), CayXanhRequest.class);

        register("ke-hoach", keHoachController, keHoachService.init(
                context.getBean(KeHoachRepo.class),
                context.getBean(KeHoachMapper.class),
                SearchFields.NGUOI_DUNG,
                ResourceName.NGUOI_DUNG
        ), KeHoachRequest.class);

        register("don-thu", donThuController, donThuService.init(
                context.getBean(DonThuRepo.class),
                context.getBean(DonThuMapper.class),
                SearchFields.NGUOI_DUNG,
                ResourceName.NGUOI_DUNG
        ), DonThuRequest.class);

    }

    private <I, O> void register(
            String resource,
            GenericController<I, O> controller,
            CrudService<Long, I, O> service,
            Class<I> requestType
    ) throws NoSuchMethodException {
        RequestMappingInfo.BuilderConfiguration options = new RequestMappingInfo.BuilderConfiguration();
        options.setPatternParser(new PathPatternParser());

        controller.setCrudService(service);
        controller.setRequestType(requestType);

        handlerMapping.registerMapping(
                RequestMappingInfo.paths("/api/" + resource)
                        .methods(RequestMethod.GET)
                        .produces(MediaType.APPLICATION_JSON_VALUE)
                        .options(options)
                        .build(),
                controller,
                controller.getClass().getMethod("getAllResources", int.class, int.class,
                        String.class, String.class, String.class, boolean.class)
        );

        handlerMapping.registerMapping(
                RequestMappingInfo.paths("/api/" + resource + "/{id}")
                        .methods(RequestMethod.GET)
                        .produces(MediaType.APPLICATION_JSON_VALUE)
                        .options(options)
                        .build(),
                controller,
                controller.getClass().getMethod("getResource", Long.class)
        );

        handlerMapping.registerMapping(
                RequestMappingInfo.paths("/api/" + resource)
                        .methods(RequestMethod.POST)
                        .consumes(MediaType.APPLICATION_JSON_VALUE)
                        .produces(MediaType.APPLICATION_JSON_VALUE)
                        .options(options)
                        .build(),
                controller,
                controller.getClass().getMethod("createResource", JsonNode.class)
        );

        handlerMapping.registerMapping(
                RequestMappingInfo.paths("/api/" + resource + "/{id}")
                        .methods(RequestMethod.PUT)
                        .consumes(MediaType.APPLICATION_JSON_VALUE)
                        .produces(MediaType.APPLICATION_JSON_VALUE)
                        .options(options)
                        .build(),
                controller,
                controller.getClass().getMethod("updateResource", Long.class, JsonNode.class)
        );

        handlerMapping.registerMapping(
                RequestMappingInfo.paths("/api/" + resource + "/{id}")
                        .methods(RequestMethod.DELETE)
                        .options(options)
                        .build(),
                controller,
                controller.getClass().getMethod("deleteResource", Long.class)
        );

        handlerMapping.registerMapping(
                RequestMappingInfo.paths("/api/" + resource)
                        .methods(RequestMethod.DELETE)
                        .consumes(MediaType.APPLICATION_JSON_VALUE)
                        .options(options)
                        .build(),
                controller,
                controller.getClass().getMethod("deleteResources", List.class)
        );
    }
}
