import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react"; import { getComments, getOrders } from "../../API";
import { Link } from "react-router-dom";

function AppHeader() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);
  return (
    <div className="h-16 flex justify-between items-center px-12 border-b border-solid border-opacity-25">
      <Link to="/">
        <Image width={40} src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_e7b8a53bf9ee1f0023a60ce6644dd5f8/flaticon.jpg" preview={false} />
      </Link>
      <Typography.Title>User Dashboard</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined style={{ fontSize: 24 }} onClick={() => {
            setCommentsOpen(true);
          }} />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled style={{ fontSize: 24 }} onClick={() => {
            setNotificationsOpen(true);
          }} />
        </Badge>
      </Space>
      <Drawer title="Comments" open={commentsOpen} onClose={() => {
        setCommentsOpen(false);
      }}
        maskClosable >
        <List dataSource={comments} renderItem={(item) => {
          return <List.Item>{item.body}</List.Item>;
        }} >
        </List>
      </Drawer>
      <Drawer title="Notifications" open={notificationsOpen} onClose={() => {
        setNotificationsOpen(false);
      }} maskClosable >
        <List dataSource={orders} renderItem={(item) => {
          return (
            <List.Item>
              <Typography.Text strong>{item.title}</Typography.Text> has been ordered!
            </List.Item>);
        }} >
        </List>
      </Drawer>
    </div>
  );
}
export default AppHeader;