import { Breadcrumb } from 'antd'
import BreadcrumbItemCreator from '../../components/breadcrumb-item/index'

// 生成可下拉的面包屑菜单
const menu = BreadcrumbItemCreator('/manage')

export default function Complete (){
    return (
        <>
        <Breadcrumb separator=">" style={{ margin: '16px 0' }}>
            <Breadcrumb.Item overlay={menu}><a href="">我的面签</a></Breadcrumb.Item>
            <Breadcrumb.Item>已完成</Breadcrumb.Item>
        </Breadcrumb>
        </>
    )
}