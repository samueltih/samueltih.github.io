import { FunctionComponent, HTMLAttributes, ReactElement } from "react";
import { format } from "date-fns";
import cx from "classnames";
import { FormattedMessage } from "react-intl";

type TimelineItemProps = HTMLAttributes<HTMLTableRowElement> & {
  start?: Date;
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
    <tr {...{...props, className: cx("relative hover:cursor-pointer z-30", props.className)}}>
      <div className={cx("shadow absolute h-[90%] w-full rounded-xl -left-4 top-8 -z-10 transition-colors bg-slate-500 bg-opacity-10 dark:bg-slate-400 dark:bg-opacity-10")}/>
      <td className="py-6 flex w-36">
        <div className="text-gray-500 dark:text-gray-400 text-sm font-semibold">
          {start && format(start, "MMM yyyy")} - {" "}
          {stillWorking ? <FormattedMessage id="present" /> : end && format(end, "MMM yyyy")}
        </div>
      </td>
      <td className="p-4">
        <div className="flex-1 flex flex-col gap-2 w-96">{children}</div>
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
  return <table {...props}><tbody>{children}</tbody></table>;
};
