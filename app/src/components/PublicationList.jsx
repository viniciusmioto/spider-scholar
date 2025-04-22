// src/components/PublicationList.jsx
import React from 'react';
import { PublicationCard } from './PublicationCard';

export function PublicationList({ publications }) {
  return (
    <div className="space-y-6">
      {publications.map(pub => (
        <PublicationCard key={pub.id} publication={pub} />
      ))}
    </div>
  );
}
