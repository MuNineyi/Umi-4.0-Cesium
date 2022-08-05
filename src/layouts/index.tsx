import { Outlet, Link } from 'umi';
import {Layout, Menu} from 'antd';
import { useLocation } from 'umi';
// import buildModuleUrl from 'cesium/Source/Core/buildModuleUrl';
import styles from './index.less';
// import {buildModuleUrl} from "cesium";
//
//
// buildModuleUrl.setBaseUrl('../cesium');

const {Header, Content, Footer} = Layout;

const menuItems = [
    { route: 'hero', name: '英雄' },
    { route: 'item', name: '局内道具' },
    { route: 'summoner', name: '召唤师技能' },
]
export default function BasicLayout(props: any) {
    const { pathname } = useLocation();
    // const onClickMenuItem : (link: string) => void = (link: string) => {
    //     console.log(link);
    //     history.push(link);
    // }
    return (
        <Layout>
            <Header>
                <div className={styles.logo}>王者荣耀资料库</div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[pathname]}
                    style={{ lineHeight: '64px'}}
                    // items={menuItems}
                    // onClick={(item) => {
                    //     console.log(item);
                    //     console.log(item.item);
                    //     // @ts-ignore
                    //     console.log(item.item?.props.link);
                    //     // @ts-ignore
                    //     onClickMenuItem(item.item?.props.link);
                    // }}
                >
                    {menuItems.map(menu => (
                        <Menu.Item key={`/${menu.route}`}>
                            <Link to={menu.route}>menu.name</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Header>
            <Content style={{padding: '0 50px'}}>
                <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                    <Outlet/>
                </div>
            </Content>
            <Footer className={styles.footer}>测试</Footer>
        </Layout>

    );
}
