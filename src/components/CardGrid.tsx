import React from "react";
import clsx from "clsx";

interface CardProps {
  title: string;
  description?: string;
  href?: string;
  image?: string;
  children?: React.ReactNode;
}

export function Card({
  title,
  description,
  href,
  image,
  children,
}: CardProps): React.ReactElement {
  const content = (
    <>
      {image && (
        <div className="card-grid__card-image">
          <img src={image} alt={title} loading="lazy" />
        </div>
      )}
      <div className="card-grid__card-body">
        <h3 className="card-grid__card-title">{title}</h3>
        {description && <p className="card-grid__card-desc">{description}</p>}
        {children}
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className="card-grid__card card-grid__card--link">
        {content}
      </a>
    );
  }

  return <div className="card-grid__card">{content}</div>;
}

interface CardGridProps {
  children: React.ReactNode;
  large?: boolean;
}

export function CardGrid({
  children,
  large,
}: CardGridProps): React.ReactElement {
  return (
    <div className={clsx("card-grid", large && "card-grid--large")}>
      {children}
    </div>
  );
}
