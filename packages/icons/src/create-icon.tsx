import { defaultAttributes } from './default-attributes';
import type { IconProps } from './svg-icon';
import { SvgIcon } from './svg-icon';

export type IconNode = { tag: string; attr: any };

export const createIcon = (iconName: string, iconNode: IconNode[]) => (props: IconProps) => (
  <SvgIcon data--icon-name={iconName} data--icon-lib="lucide" {...defaultAttributes} {...props}>
    {iconNode.map(({ tag: Tag, attr }, idx) => (
      <Tag key={idx} {...attr} />
    ))}
  </SvgIcon>
);
