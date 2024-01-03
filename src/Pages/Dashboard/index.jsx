import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined, } from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getRevenue } from "../../API";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { ordersAction } from "../../redux/actions/Dashboard/ordersAction";
import { inventoryCountAction } from "../../redux/actions/Dashboard/inventoryCountAction";
import { customerCountAction } from "../../redux/actions/Dashboard/customerCountAction";
import { revenueCountAction } from "../../redux/actions/Dashboard/revenueCountAction";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function Dashboard() {
    const [revenue, setRevenue] = useState(0);
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders);
    const inventoryCount = useSelector((state) => state.inventoryCount);
    const customerCount = useSelector((state) => state.customerCount);
    const revenueCount = useSelector((state) => state.revenueCount);

    useEffect(() => {
        dispatch(ordersAction())
        dispatch(inventoryCountAction())
        dispatch(customerCountAction())
        dispatch(revenueCountAction())
        
    }, []);

    return (
        <Space size={20} direction="vertical">
            <Typography.Title level={4}>Dashboard</Typography.Title>
            <Space direction="horizontal">
                <DashboardCard
                    icon={
                        <ShoppingCartOutlined
                            style={{
                                color: "green",
                                backgroundColor: "rgba(0,255,0,0.25)",
                                borderRadius: 20,
                                fontSize: 24,
                                padding: 8,
                            }}
                        />
                    }
                    title={"Orders"}
                    value={orders?.carts?.length}
                />
                <DashboardCard
                    icon={
                        <ShoppingOutlined
                            style={{
                                color: "blue",
                                backgroundColor: "rgba(0,0,255,0.25)",
                                borderRadius: 20,
                                fontSize: 24,
                                padding: 8,
                            }}
                        />
                    }
                    title={"Inventory"}
                    value={inventoryCount?.total}
                />
                <DashboardCard
                    icon={
                        <UserOutlined
                            style={{
                                color: "purple",
                                backgroundColor: "rgba(0,255,255,0.25)",
                                borderRadius: 20,
                                fontSize: 24,
                                padding: 8,
                            }}
                        />
                    }
                    title={"Customer"}
                    value={customerCount?.total}
                />
                <DashboardCard
                    icon={
                        <DollarCircleOutlined
                            style={{
                                color: "red",
                                backgroundColor: "rgba(255,0,0,0.25)",
                                borderRadius: 20,
                                fontSize: 24,
                                padding: 8,
                            }}
                        />
                    }
                    title={"Revenue"}
                    // value={revenueCount?.priceTotal}
                    value={82374}
                />
            </Space>
            <Space>
                <RecentOrders />
                <DashboardChart />
            </Space>
        </Space>
    );
}

function DashboardCard({ title, value, icon }) {
    return (
        <Card>
            <Space direction="horizontal">
                {icon}
                <Statistic title={title} value={value} />
            </Space>
        </Card>
    );
}
function RecentOrders() {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);
    const orders = useSelector((state) => state.orders);

    useEffect(() => {
        setLoading(true);
        if(orders){
            setLoading(false);
        }
    }, []);

    return (
        <>
            <Typography.Text>Recent Orders</Typography.Text>
            <Table
                columns={[
                    {
                        title: "Title",
                        dataIndex: "title",
                    },
                    {
                        title: "Quantity",
                        dataIndex: "quantity",
                    },
                    {
                        title: "Price",
                        dataIndex: "discountedPrice",
                    },
                ]}
                loading={loading}
                dataSource={orders && orders?.carts && orders?.carts[0]?.products || []}
                pagination={false}
            ></Table>
        </>
    );
}

function DashboardChart() {
    const [reveneuData, setReveneuData] = useState({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        getRevenue().then((res) => {
            const labels = res.carts.map((cart) => {
                return `User-${cart.userId}`;
            });
            const data = res.carts.map((cart) => {
                return cart.discountedTotal;
            });

            const dataSource = {
                labels,
                datasets: [
                    {
                        label: "Revenue",
                        data: data,
                        backgroundColor: "red",
                    },
                ],
            };

            setReveneuData(dataSource);
        });
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: "Order Revenue",
            },
        },
    };

    return (
        <Card style={{ width: 500, height: 250 }}>
            <Bar options={options} data={reveneuData} />
        </Card>
    );
}
export default Dashboard;
