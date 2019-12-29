import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import results from '../../../../src/data/seasons/results/fridayfun.json';

dayjs.extend(advancedFormat);

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

export default function Results({ season }) {
  return (
    <Accordion allowMultipleExpanded allowZeroExpanded>
      {results.map(session => {
        return (
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>{session.track}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Race time: {dayjs(session.resultTime.split('-').join('/')).format('MMMM Do, h:mm a (YYYY)')}</p>

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
