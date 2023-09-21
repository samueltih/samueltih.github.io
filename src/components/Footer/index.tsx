import { HTMLAttributes, FunctionComponent } from "react";

export type FooterProps = HTMLAttributes<HTMLDivElement>;

const Footer: FunctionComponent<FooterProps> = ({ ...props }) => {
  return <footer {...props}>Copyright @ 2023. Tous droits réservés.</footer>;
};

export default Footer;
