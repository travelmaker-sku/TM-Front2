import { CardType } from "../../lib/type";

interface ICard {
  post: CardType | null;
}

const Card = ({ post }: ICard) => {
  return (
    <>
      <li>
        <img
          src={post?.filepath ? post.filepath : "./images/default-photo.png"}
          alt={post?.filename}
        />
      </li>
      <li>
        <span>이름</span>
        {post?.title}
      </li>
      <li>
        <span>위치</span>
        {post?.location}
      </li>
      <li>
        <span>날짜</span>
        {post?.date}
      </li>
      {post?.weather ? (
        <li>
          <span>날씨</span>
          {post?.weather}
        </li>
      ) : (
        ""
      )}
      {post?.menu ? (
        <li>
          <span>메뉴</span>
          {post?.menu}
        </li>
      ) : (
        ""
      )}
      {post?.price ? (
        <li>
          <span>가격</span>
          {post?.price}
        </li>
      ) : (
        ""
      )}
      <li>
        <span>평점</span>
        {post?.score}
      </li>
      <li>
        <span>메모</span>
        {post?.memo}
      </li>
      <li className="tag">{post?.tag?.map((item) => `#${item} `)}</li>
    </>
  );
};

export default Card;
