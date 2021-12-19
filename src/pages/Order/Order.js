import { useNavigate } from "react-router-dom";
import { Descriptions, Button, Space } from "antd";
import { CheckOutlined } from "@ant-design/icons";

function Order() {
  const navigate = useNavigate();
  return (
    <Space direction="vertical" size="large">
      <Descriptions
        title="Order Details"
        column={1}
        style={{ width: "500px" }}
        bordered
      >
        <Descriptions.Item label="Quantity">11</Descriptions.Item>
        <Descriptions.Item label="Pricing Details">
          Total Cost: 798.04$
          <br />
          Delivery Charges: 2.00$
          <br />
          Tax Payble: 5.00$
        </Descriptions.Item>
        <Descriptions.Item label="Grand Total">805.4$</Descriptions.Item>
        <Descriptions.Item label="Name">Shang Chi</Descriptions.Item>
        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
        <Descriptions.Item label="Expected Date of Deliver">
          {new Date().toISOString()}
        </Descriptions.Item>
        <Descriptions.Item label="Delivery Address">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
      <Button
        type="primary"
        icon={<CheckOutlined />}
        size="large"
        onClick={() => navigate("/home")}
      >
        Order
      </Button>
    </Space>
  );
}

export default Order;
