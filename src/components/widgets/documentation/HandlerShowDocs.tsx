import { ReactElement } from 'react';
import { InterpreterMarkdown } from '@/components/interpreterMarkdown';
import { SchemaType } from '@/interfaces/api';

type Props = {
  docSelected: SchemaType;
};

export const HandlerShowDocs = ({ docSelected }: Props): ReactElement => {
  return (
    <div className="px-6 py-6 pt-5">
      {docSelected?.content?.map((page) => {
        const key = `${docSelected.title}-${docSelected.dynamicId}`;

        if ('markdown' in page) {
          return <InterpreterMarkdown text={page.markdown || ''} key={key} />;
        }

        return <div>Está documentação não está mapeada {JSON.stringify(page)}</div>;
      })}
      <span className="border-b-2 block" />
    </div>
  );
};