import { List, Skeleton, InputNumber, Typography, Space } from "antd";
import { getProductById } from "../../services/product.service";

const { Title } = Typography;

function CartItem({ productId, quantity }) {
  const product = getProductById(productId);
  const totalPrice = quantity * product.price;
  return (
    <List.Item
      extra={<img width={272} alt="logo" src={product.image} />}
      actions={[
        <a key="list-loadmore-edit">edit</a>,
        <a key="list-loadmore-more">delete</a>,
      ]}
    >
      <Skeleton avatar title={false} loading={false} active>
        <List.Item.Meta
          // avatar={<Avatar src={item.picture.large} />}
          title={<a href="https://ant.design">{product.title}</a>}
          description={product.description}
        />
        <Space align="start" size={[16, 16]}>
          <InputNumber
            size="large"
            min={1}
            max={100000}
            defaultValue={quantity}
            // onChange={onChange}
          />
          <Title level={2}>Price: {totalPrice}$</Title>
        </Space>
      </Skeleton>
    </List.Item>
  );
}

export default CartItem;
