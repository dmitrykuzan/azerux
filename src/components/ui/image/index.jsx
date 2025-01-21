import NextImage from 'next/image';

export const Image = (props) => {
  //Props
  const { src, loading = 'lazy', alt = '', ariaHidden = false, width, className, height, ...restProps } = props;

  return (
    <NextImage
      className={className}
      src={src}
      loading={loading}
      alt={alt}
      width={width}
      height={height}
      aria-hidden={ariaHidden || undefined}
      {...restProps}
    />
  );
};
