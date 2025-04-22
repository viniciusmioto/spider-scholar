// src/components/PublicationCard.jsx
import React from 'react';

export function PublicationCard({ publication }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        {publication.title}
      </h2>
      <p className="text-gray-600 mb-4">
        {publication.authors} &bull; {publication.year}
      </p>
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-4">
        <div><span className="font-medium">Field:</span> {publication.field}</div>
        <div><span className="font-medium">Subfield:</span> {publication.subfield}</div>
        <div><span className="font-medium">Topic:</span> {publication.topic}</div>
        <div><span className="font-medium">Venue:</span> {publication.venue}</div>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <span className="font-medium">Citations:</span>
        <span className="ml-1 text-gray-700">{publication.citations}</span>
      </div>
    </div>
  );
}
