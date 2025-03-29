import { SvgIcon } from '~/primitives';
import { withAs } from '~/utils/as';
import { cn } from '~/utils/cn';
import type { ExactlyOne } from '~/utils/types';

export type RootProps = ExactlyOne<{
  imageUrl: string;
  name: string;
}>;

export const Root = withAs('div')<RootProps>(
  ({ As, imageUrl, name, class: className, ...props }) => (
    <As
      {...props}
      style={imageUrl ? { backgroundImage: `url("${imageUrl}")` } : {}}
      class={cn(
        'uppercase relative flex bg-goku text-bulma items-center justify-center overflow-hidden font-medium rounded-onwo-i-sm text-onwo-14 w-10 h-10 bg-cover',
        className,
      )}
    >
      {name !== undefined && <span>name</span>}
      {!imageUrl && !name && (
        <SvgIcon data--icon-name="generic-user" viewBox="0 0 32 32">
          <path
            d="M20.3839 10.8846C20.3839 13.3062 18.4208 15.2692 15.9992 15.2692C13.5777 15.2692 11.6146 13.3062 11.6146 10.8846C11.6146 8.46306 13.5777 6.5 15.9992 6.5C18.4208 6.5 20.3839 8.46306 20.3839 10.8846Z"
            stroke="currentColor"
          />
          <path
            d="M15.9992 25.5C20.3425 25.5 22.8449 24.3797 24.0057 23.6586C24.5489 23.3212 24.8166 22.6999 24.7614 22.0563C24.6859 21.1773 24.3788 20.2994 24.0661 19.6031C23.6555 18.6888 22.7051 18.1923 21.7029 18.1923H10.2956C9.29337 18.1923 8.34296 18.6888 7.93239 19.6031C7.61969 20.2994 7.31257 21.1773 7.23713 22.0563C7.18189 22.6999 7.44961 23.3212 7.99278 23.6586C9.15358 24.3797 11.6559 25.5 15.9992 25.5Z"
            stroke="currentColor"
          />
        </SvgIcon>
      )}
    </As>
  ),
);
