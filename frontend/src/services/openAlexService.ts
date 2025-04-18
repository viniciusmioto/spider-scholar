import axios from 'axios';

// OpenAlex API base URL
const BASE_URL = 'https://api.openalex.org';

// Computer Science concept ID from OpenAlex
const COMPUTER_SCIENCE_CONCEPT_ID = 'C41008148';

// Email for API rate limit (replace with your email when deploying)
const EMAIL = 'example@domain.com';

/**
 * Get the top most cited computer science papers from the last year
 * @param {number} limit - Number of papers to return
 * @returns {Promise<Array>} - Array of paper objects
 */
export const getTopCitedCSPapers = async (limit = 10) => {
  try {
    // Calculate date one year ago from now
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    const fromDate = oneYearAgo.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    
    // Current date
    const toDate = new Date().toISOString().split('T')[0]; // Format as YYYY-MM-DD
    
    const response = await axios.get(`${BASE_URL}/works`, {
      params: {
        'filter': `concepts.id:${COMPUTER_SCIENCE_CONCEPT_ID},from_publication_date:${fromDate},to_publication_date:${toDate}`,
        'sort': 'cited_by_count:desc',
        'per-page': limit,
        'mailto': EMAIL
      }
    });
    
    return response.data.results;
  } catch (error) {
    console.error('Error fetching top cited CS papers:', error);
    throw error;
  }
};

/**
 * Get details for a specific paper by its ID
 * @param {string} paperId - OpenAlex ID of the paper
 * @returns {Promise<Object>} - Paper details
 */
export const getPaperDetails = async (paperId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/works/${paperId}`, {
      params: {
        'mailto': EMAIL
      }
    });
    
    return response.data;
  } catch (error) {
    console.error(`Error fetching paper details for ${paperId}:`, error);
    throw error;
  }
};

export default {
  getTopCitedCSPapers,
  getPaperDetails
};
