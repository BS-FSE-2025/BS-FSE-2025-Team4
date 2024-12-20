function filterScheduleByDate(date, trainingData) {
    return trainingData.filter(training => training.date === date);
  }
    describe('filterScheduleByDate', () => {
    test('displays correct sessions for a given date', () => {
      const mockData = [
        { date: '2024-12-21', time: '10:00 AM', location: 'Gym A', group: 'Group 1' },
        { date: '2024-12-21', time: '12:00 PM', location: 'Gym B', group: 'Group 2' },
        { date: '2024-12-22', time: '9:00 AM', location: 'Gym A', group: 'Group 3' },
        { date: '2024-12-22', time: '11:00 AM', location: 'Gym C', group: 'Group 4' },
      ];
      const filteredData = filterScheduleByDate('2024-12-21', mockData);
      expect(filteredData.length).toBe(2);
      expect(filteredData[0].time).toContain('10:00 AM');
      expect(filteredData[1].time).toContain('12:00 PM');
    });
  
    test('displays an empty array when no sessions are available', () => {
      const mockData = trainingData; 
      const filteredData = filterScheduleByDate('2024-12-23', mockData);
      expect(filteredData.length).toBe(0);
    });
  
    test('returns a new filtered array on each call', () => {
      const mockData = trainingData;
      const firstFiltered = filterScheduleByDate('2024-12-21', mockData);
      const secondFiltered = filterScheduleByDate('2024-12-22', mockData);
      expect(firstFiltered).not.toBe(secondFiltered); 
      expect(firstFiltered.length).toBe(2);
      expect(secondFiltered.length).toBe(2);
    });
  });