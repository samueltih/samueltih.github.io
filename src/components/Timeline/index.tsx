import { FunctionComponent, HTMLAttributes, ReactElement } from "react";
import { format } from "date-fns";

type TimelineItemProps = HTMLAttributes<HTMLTableRowElement> & {
  start: Date;
  end?: Date;
  stillWorking?: boolean;
};

export const TimelineItem: FunctionComponent<TimelineItemProps> = ({
  start,
  end,
  stillWorking = false,
  children,
  ...props
}) => {
  return (
    <tr {...props}>
      <td className="p-4 flex w-36">
        <div className="text-gray-400 text-sm">
          {format(start, "MMM yyyy")} -{" "}
          {stillWorking ? "Present" : format(end!, "MMM yyyy")}
        </div>
      </td>
      <td className="p-4">
        <div className="flex-1 flex flex-col gap-2">{children}</div>
      </td>
    </tr>
  );
};

type TimelineProps = HTMLAttributes<HTMLTableElement> & {
  children:
    | ReactElement<typeof TimelineItem>
    | ReactElement<typeof TimelineItem>[];
};

export const Timeline: FunctionComponent<TimelineProps> = ({
  children,
  ...props
}) => {
  return <table {...props}>{children}</table>;
};
