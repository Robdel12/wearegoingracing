import React from 'react';
import results from '../../../src/data/seasons/results/fridayfun.json';

function SessionResults({ session, type }) {
  if (!session) return null;

  let Interval = ({ interval }) => (interval ? <>({interval})</> : null);

  return (
    <div>
      <h4>{type}</h4>
      {session.map(results => (
        <div>
          <div>
            {results.Pos} - #{results['Car #']} {results.Driver} - {results['FastestLap Time']}{' '}
            <Interval interval={results.Interval} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Results() {
  return (
    <div>
      {results.map(session => {
        return (
          <div>
            <h3>{session.track}</h3>
            <span>{session.resultTime}</span>

            <SessionResults session={session.practice} type="Practice" />
            <SessionResults session={session.qualifying} type="Qualifying" />
            <SessionResults session={session.race} type="Race" />
          </div>
        );
      })}
    </div>
  );
}
