import React from 'react';
import './PageControls.css';

export default function PageControls({ page, setPage }) {
  return (
    <div>
      {page > 1 && (
        <button className="page-button" onClick={() => setPage(page - 1)}>
          prev
        </button>
      )}
      <span className="page-number">{page}</span>
      <button onClick={() => setPage(page + 1)}>next</button>
    </div>
  );
}
