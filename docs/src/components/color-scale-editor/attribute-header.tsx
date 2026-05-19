export type AttributeHeaderProps = {
  title: string;
  gradient: string;
};

export const AttributeHeader = (props: AttributeHeaderProps) => {
  return (
    <div class="w-1/3 px-1">
      <h3 class="text-xs capitalize text-center font-semibold text-gray-600 mb-1">{props.title}</h3>
      <div
        class="w-full h-2 border border-black/10 rounded-sm"
        style={{ background: props.gradient }}
      />
    </div>
  );
};
