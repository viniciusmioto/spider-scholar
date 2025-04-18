import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  AppBar, 
  Toolbar, 
  CircularProgress,
  Card, 
  CardContent,
  CardActionArea,
  Grid,
  Link,
  Divider
} from '@mui/material';
import GridItem from './GridItem';
import { School as SchoolIcon, MenuBook as MenuBookIcon } from '@mui/icons-material';
import { getTopCitedCSPapers } from '../services/openAlexService';
import AdPlaceholder from './AdPlaceholder';
import logo from '../assets/spider-scholar-logo.png';

// Paper type definition based on OpenAlex API response
interface Paper {
  id: string;
  title: string;
  publication_date: string;
  cited_by_count: number;
  primary_location?: {
    source?: {
      display_name?: string;
    };
  };
  authorships?: Array<{
    author: {
      display_name: string;
    };
    position?: string;
  }>;
  doi?: string;
}

const HomePage: React.FC = () => {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        setLoading(true);
        const data = await getTopCitedCSPapers(10);
        setPapers(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching papers:', err);
        setError('Failed to load papers. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPapers();
  }, []);

  // Helper function to format date
  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Helper function to get primary author
  const getPrimaryAuthor = (paper: Paper) => {
    if (!paper.authorships || paper.authorships.length === 0) return 'Unknown Author';
    
    // Try to find first author
    const firstAuthor = paper.authorships.find(a => a.position === 'first');
    if (firstAuthor) return firstAuthor.author.display_name;
    
    // Otherwise return the first in the list
    return paper.authorships[0].author.display_name;
  };

  // Helper function to get journal/source name
  const getSourceName = (paper: Paper) => {
    return paper.primary_location?.source?.display_name || 'Unknown Source';
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src={logo} 
              alt="Spider Scholar Logo" 
              style={{ height: 40, marginRight: 10 }}
            />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Spider Scholar
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        <Grid container spacing={3}>
          {/* Top Banner Ad */}
          <GridItem item xs={12}>
            <Box sx={{ width: '100%' }}>
              <AdPlaceholder height={90} />
            </Box>
          </GridItem>

          {/* Main Title */}
          <GridItem item xs={12}>
            <Box sx={{ width: '100%' }}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 3, 
                  textAlign: 'center',
                  backgroundColor: 'primary.main',
                  color: 'white',
                  width: '100%'
                }}
              >
                <Typography variant="h4" component="h1" gutterBottom>
                  🔍 Top 10 Most Cited Computer Science Papers
                </Typography>
                <Typography variant="subtitle1">
                  Discover the most influential research from the past year
                </Typography>
              </Paper>
            </Box>
          </GridItem>

          {/* Papers List */}
          <GridItem item xs={12} md={8}>
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                <CircularProgress />
              </Box>
            ) : error ? (
              <Paper sx={{ p: 3, textAlign: 'center', color: 'error.main' }}>
                <Typography>{error}</Typography>
              </Paper>
            ) : (
              <Box>
                {papers.map((paper, index) => (
                  <Card 
                    key={paper.id} 
                    sx={{ 
                      mb: 2,
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 4
                      }
                    }}
                  >
                    <CardActionArea 
                      component="a" 
                      href={paper.doi ? `https://doi.org/${paper.doi}` : '#'} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Typography 
                            variant="h6" 
                            component="div" 
                            sx={{ 
                              backgroundColor: 'primary.main', 
                              color: 'white', 
                              width: 30, 
                              height: 30, 
                              borderRadius: '50%', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              mr: 2
                            }}
                          >
                            {index + 1}
                          </Typography>
                          <Typography variant="h6" component="div">
                            {paper.title}
                          </Typography>
                        </Box>
                        
                        <Divider sx={{ my: 1 }} />
                        
                        <Grid container spacing={2}>
                          <GridItem item xs={12} sm={8}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <SchoolIcon fontSize="small" sx={{ mr: 1, color: 'secondary.main' }} />
                              <Typography variant="body2">
                                {getPrimaryAuthor(paper)} et al.
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <MenuBookIcon fontSize="small" sx={{ mr: 1, color: 'secondary.main' }} />
                              <Typography variant="body2">
                                {getSourceName(paper)}
                              </Typography>
                            </Box>
                          </GridItem>
                          <GridItem item xs={12} sm={4}>
                            <Box sx={{ textAlign: 'right' }}>
                              <Typography variant="body2" color="text.secondary">
                                Published: {formatDate(paper.publication_date)}
                              </Typography>
                              <Typography 
                                variant="body1" 
                                sx={{ 
                                  fontWeight: 'bold', 
                                  color: 'secondary.main' 
                                }}
                              >
                                Citations: {paper.cited_by_count}
                              </Typography>
                            </Box>
                          </GridItem>
                        </Grid>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                ))}
              </Box>
            )}
          </GridItem>

          {/* Sidebar with Ads */}
          <GridItem item xs={12} md={4}>
            <Box sx={{ width: '100%' }}>
              <AdPlaceholder height={600} label="Sidebar Ad" />
            </Box>
          </GridItem>

          {/* Bottom Ad */}
          <GridItem item xs={12}>
            <Box sx={{ width: '100%' }}>
              <AdPlaceholder height={250} />
            </Box>
          </GridItem>
        </Grid>
      </Container>

      {/* Footer */}
      <Box 
        component="footer" 
        sx={{ 
          py: 3, 
          px: 2, 
          mt: 'auto', 
          backgroundColor: 'secondary.main',
          color: 'white'
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Spider Scholar - Research Trends Dashboard
          </Typography>
          <Typography variant="body2" align="center">
            Data provided by <Link href="https://openalex.org" target="_blank" rel="noopener" color="inherit" underline="hover">OpenAlex</Link>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
