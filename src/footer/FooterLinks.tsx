import React, { ReactNode } from 'react'

type IFooterLinksProps = {
  title: string;
  children: ReactNode;
};

const FooterLinks = (props: IFooterLinksProps) => (
  <div className="footer-links text-center sm:text-left">
    <div className="font-semibold text-white footer-items-title">{props.title}</div>

    <nav className="mt-3">
      <ul>{props.children}</ul>
    </nav>

    <style jsx>
      {`
        .footer-links :global(li) {
          @apply mt-1;
        }
        .footer-items-title {
          font-size: 1.375rem;
          line-height: 1.5rem;
          letter-spacing: 0.22px;
        }
      `}
    </style>
  </div>
)

export { FooterLinks }
