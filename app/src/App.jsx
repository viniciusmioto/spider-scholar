import React from 'react'
import Navbar from './components/Navbar'
import { PublicationList } from './components/PublicationList'

const App = () => {
  const publications = [
    {
      id: '1',
      title: 'A State of Practice Mapping of Scripting/Recording-based Game Test Automation Tools',
      authors: 'Doe, J.; Smith, A.',
      year: 2024,
      field: 'Software Engineering',
      subfield: 'Game Testing',
      topic: 'Test Automation',
      venue: 'GAS Conference',
      citations: 15,
    },
    {
      id: '2',
      title: 'Automated Testing of Game Engines: A Systematic Review',
      authors: 'Brown, B.; Johnson, C.',
      year: 2023,
      field: 'Computer Science',
      subfield: 'Game Development',
      topic: 'Automated Testing',
      venue: 'ICSE 2023',
      citations: 30,
    },
    {
      id: '3',
      title: 'A Survey of Automated Testing Tools for Game Development',
      authors: 'Taylor, D.; Wilson, E.',
      year: 2022,
      field: 'Software Engineering',
      subfield: 'Game Development',
      topic: 'Testing Tools',
      venue: 'ASE',
      citations: 20,
    }
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <PublicationList publications={publications} />
      </main>
    </>
  )
}

export default App
