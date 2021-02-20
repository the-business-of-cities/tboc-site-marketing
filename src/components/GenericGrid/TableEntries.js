import * as R from "ramda";
import * as mixins from "../../utils/old";
import EntryWrapper from "./EntryWrapper";
import PropTypes from "prop-types";
import React from "react";
import Table from "../Table";
import marked from "marked";
import slugify from "slugify";
import styled from "styled-components";
import { MaybeLink } from "../Primitives";

const Cell = ({ entry, slug, children, GatsbyLink }) => {
  return (
    <td>
      <MaybeLink
        GatsbyLink={GatsbyLink}
        to={
          !entry.externalUrl &&
          `/${slug}/${slugify(entry.title, { lower: true })}`
        }
        href={entry.externalUrl}
      >
        {children}
      </MaybeLink>
    </td>
  );
};

const TableEntry = ({ slug, entry }) => {
  return (
    <tr key={`entry-${slugify(entry.title.toLowerCase())}`}>
      <Cell entry={entry} slug={slug}>
        {entry.title && entry.title}
      </Cell>

      <Cell entry={entry} slug={slug}>
        {entry.description && entry.description}{" "}
      </Cell>
    </tr>
  );
};

const TableEntries = ({ entries, slug }) => {
  return (
    <Table>
      <tbody>
        <tr>
          <th>{slug || "Name"}</th>

          <th>Description</th>
        </tr>

        {entries.map(entry => {
          return <TableEntry slug={slug} entry={entry} />;
        })}
      </tbody>
    </Table>
  );
};

export default TableEntries;
