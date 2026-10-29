import { Fragment, type ElementType, type ReactNode } from 'react';

export function SplitWords({
  text,
  id,
  as: Tag = 'span',
  className,
  wordClassName,
  accentClassName = 'serif-accent text-transparent bg-clip-text bg-gradient-to-r from-[#F7E7C4] via-[#C99E5D] to-[#DFBE8A]',
}: {
  text: string;
  id?: string;
  as?: ElementType;
  className?: string;
  wordClassName?: string;
  accentClassName?: string;
}) {
  const words = text.split(' ');
  return (
    <Tag id={id} className={className} aria-label={text.replace(/\*/g, '')}>
      {words.map((raw, i) => {
        const accent = raw.startsWith('*') && raw.replace(/[.,?!]$/, '').endsWith('*');
        const word = raw.replace(/\*/g, '');
        const content: ReactNode = accent ? <span className={accentClassName}>{word}</span> : word;
        return (
          <Fragment key={i}>
            <span className="mask" aria-hidden="true">
              <span data-word className={wordClassName}>
                {content}
              </span>
            </span>
            {i < words.length - 1 ? ' ' : null}
          </Fragment>
        );
      })}
    </Tag>
  );
}
