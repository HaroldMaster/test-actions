Object.defineProperty(window, 'getComputedStyle', {
    value: () => ({
      getPropertyValue: prop => {
        return '';
      }
    })
  });
  
  Object.defineProperty(window, 'Beacon', {
    value: jest.fn()
  });
  
  class TestAudioContext {}
  
  class TestTextDecoder {
    decode = () => true;
  }
  
  class TestTextEncoder {
    encode = () => true;
  }
  
  Object.defineProperty(window, 'AudioContext', {
    value: TestAudioContext
  });
  
  Object.defineProperty(window, 'TextDecoder', {
    value: TestTextDecoder
  });
  
  Object.defineProperty(window, 'TextEncoder', {
    value: TestTextEncoder
  });