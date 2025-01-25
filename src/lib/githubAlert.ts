import { Blockquote } from '@/components/Blockquote';

const alertTypes = [
  'info',
  'warning',
  'important',
  'success',
  'danger',
];
const alertTypeRegex = /\[!(?<name>.*?)\]\s*(?<title>.*)/;

export function withAlertType(Component: any) {
  return function (props: any) {
    let name: string | undefined;
    let title: string | undefined;

    if (Array.isArray(props.children)) {
      const str = props.children[1].props.children;
      if (typeof str === 'string') {
        const result = str.match(alertTypeRegex)?.groups;
        const matchedName = result?.name;
        const matchedTitle = result?.title;
        if (matchedName && alertTypes.includes(matchedName.toLowerCase() as any)) {
          name = matchedName.toLowerCase();
          title = matchedTitle;
        }
      }
    }

    if (!name) {
      return Blockquote(props);
    }

    return Component({
      ...props,
      type: name,
      title: title || (name.slice(0, 1).toUpperCase() + name.slice(1)),
      children: props.children.slice(2),
    });
  };
}
