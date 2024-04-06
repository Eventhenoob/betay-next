import DOMPurify from "dompurify";

const HtmlFromText = ({ htmlString }: { htmlString: string }) => {
  const sanitizedHtml = DOMPurify.sanitize(htmlString);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};

export default HtmlFromText;
