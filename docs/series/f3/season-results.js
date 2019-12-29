import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

// TODO: use dynamic imports in the component for data
import results from '../../../src/data/seasons/results/fridayfun.json';

dayjs.extend(customParseFormat);

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
    <Accordion allowMultipleExpanded>
      {results.map(session => {
        return (
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>{session.track}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Race time: {session.resultTime}</p>
              <SessionResults session={session.practice} type="Practice" />
              <SessionResults session={session.qualifying} type="Qualifying" />
              <SessionResults session={session.race} type="Race" />
            </AccordionItemPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
