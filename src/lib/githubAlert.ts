const alertTypes = [
  'default',
  'info',
  'warning',
  'important',
  'success',
  'danger',
];
const alertTypeRegex = /\[!(?<name>.*?)\]\s*(?<title>.*)/;

export function withAlertType(Component: any) {
  return function (props: any) {
    let name = 'default';
    let title: string | undefined;

    if (Array.isArray(props.children)) {
      const str = props.children[1].props.children;
      if (typeof str === 'string') {
        const result = str.match(alertTypeRegex)?.groups;
        const matchedName = result?.name;
        const matchedTitle = result?.title;
        if (matchedName && alertTypes.includes(matchedName.toLowerCase() as any)) {
          name = matchedName;
          title = matchedTitle;
        }
      }
    }

    return Component({
      ...props,
      type: name,
      title,
      children: props.children.slice(2),
    });
  };
}
