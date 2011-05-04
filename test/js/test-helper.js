/**
 * Google API Mocks
 */
google = {
  contentmatch : {
    getContentMatches : function() {
      if( (urls = document.location.href.split(/urls=/)[1]) ) {
        return urls.split(',');
      }
      return [];
    }
  }
};

gadgets = {
  window : {
    adjustHeight : function(height) {
      console.log(height);
    }
  }
};