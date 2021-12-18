import { List, Button, Typography, Row, Col } from "antd";
import { CheckOutlined } from "@ant-design/icons";

import { getTotalPrice } from "../../services/product.service";
import CartItem from "../../components/CartItem";

import cartItemsList from "../../mocks/carts";

const { Title } = Typography;

function CartsDashboard() {
  const totalCost = getTotalPrice(cartItemsList[0].products);
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={cartItemsList[0].products}
      footer={
        <Row justify="space-between" align="start">
          <Col span={8}>
            <Button
              type="primary"
              shape="round"
              icon={<CheckOutlined />}
              size="large"
            >
              Buy Now
            </Button>
          </Col>
          <Col span={4}>
            <Title level={2}>Total: {totalCost}$</Title>
          </Col>
        </Row>
      }
      renderItem={(item) => (
        <CartItem productId={item.productId} quantity={item.quantity} />
      )}
    />
  );
}

export default CartsDashboard;
