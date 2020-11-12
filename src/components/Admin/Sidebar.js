import React from 'react';
import * as Ai from 'react-icons/ai';
import * as Bi from 'react-icons/bi';

export  const SidebarData =[
    {
        title:'Edit',
        path:'/admin/dashboard/edit',
        icon : <Ai.AiTwotoneDatabase/>,
        cName:'nav-text'
    },
    {
        title:'Add Movie',
        path:'/admin/dashboard/add',
        icon : <Ai.AiOutlineFileAdd/>,
        cName:'nav-text'
    },
    {
        title:'Delete',
        path:'/Delete',
        icon : <Ai.AiFillDelete/>,
        cName:'nav-text'
    },
    {
        title:'Logout',
        path:'/Delete',
        icon : <Bi.BiLogOut/>,
        cName:'nav-text'
    }
]