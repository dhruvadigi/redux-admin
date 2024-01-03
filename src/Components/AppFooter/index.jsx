import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="h-16 flex justify-evenly items-center border-t border-solid border-opacity-25">
      <Typography.Link href="tel:+123456789">+123456789</Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        Terms of Use
      </Typography.Link>
    </div>
  );
}
export default AppFooter;
