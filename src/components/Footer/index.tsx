import { HTMLAttributes, FunctionComponent } from "react";

export type FooterProps = HTMLAttributes<HTMLDivElement>;

const Footer: FunctionComponent<FooterProps> = ({ ...props }) => {
  return (
    <footer
      {...{
        className: `flex justify-center p-4 bg-yellow-400 ${
          props.className ?? ""
        }`,
        ...props,
      }}
    >
      Copyright @ 2023. Tous droits réservés.
    </footer>
  );
};

export default Footer;
