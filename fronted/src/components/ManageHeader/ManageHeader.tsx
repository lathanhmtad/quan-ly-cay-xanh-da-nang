import React from "react";
import {Space} from "antd"

interface ManageHeaderProps {
    children: React.ReactNode
}

function ManageHeader({
                          children
                      }: ManageHeaderProps) {
    return (
        <div className='d-flex align-items-center justify-content-between'>
            {children}
        </div>
    )
}

export default ManageHeader