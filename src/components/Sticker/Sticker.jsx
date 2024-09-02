import styled from "styled-components";

const StickerStyledItem = styled.li`
  width: 253px;
  height: 280px;
`;

const Sticker = ({ stickerUrl, stickerLabel }) => (
  <StickerStyledItem data-name={stickerLabel}>
    <img src={stickerUrl} alt={stickerLabel} />
  </StickerStyledItem>
);

export default Sticker;
