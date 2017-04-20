/*
 * Created by Thomas Hartmann
 * A wrapper component for boligannonser. Helpful
 * when we don't know whether we have the required data
 * or not
 */

import React from 'react'

class AnnonseWrapper extends React.Component {

  render ({ fetching, loading, content, currentContent, match, fetchContent = f => f }) {
    return (
      (
        <div>
          <button onClick={() => fetchContent(match.params.id)}>Click me to refresh the result!</button>
          {content}
        </div>
      )
    );
  }
}

export default AnnonseWrapper;


/*

    {
      currentContent.Id === parseInt(match.params.id)
      ? content
      : fetching
        ? loading
        : fetchContent(parseInt(match.params.id))
    }

*/