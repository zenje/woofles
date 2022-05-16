import { useRef } from 'react';
import { useHover } from 'usehooks-ts';
import cn from 'classnames';

type Props = {
  hoverText: string;
  imgClasses: string;
  onHoverImgClasses: string;
  onClick: any;
  src: string;
};

const ImageWithHoverText = ({
  hoverText,
  imgClasses,
  onHoverImgClasses,
  onClick,
  src,
}: Props) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  const classNamesObj: any = {};
  classNamesObj[imgClasses] = true;
  classNamesObj[onHoverImgClasses] = isHover;
  const classNames = cn(classNamesObj);

  return (
    <div className="image-with-hover-container" ref={hoverRef}>
      <img className={classNames} src={src} onClick={onClick} />
      {isHover && (
        <h1 className="spectrum-Heading spectrum-Heading--sizeXL image-with-hover-text">
          {hoverText}
        </h1>
      )}
    </div>
  );
};

export default ImageWithHoverText;
