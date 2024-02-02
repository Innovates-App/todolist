namespace todolist;
using { managed } from '@sap/cds/common';


entity activity : managed {
  key ID: UUID;
      NAME: String;
      DONE: Boolean;
      START_TS: Timestamp;
      END_TS: Timestamp;
      OWNER: String;
      DETAILS: Composition of one activity_detail on DETAILS.ACTIVITY = $self;
}

entity activity_detail : managed {
  key ID: UUID;
      ACTIVITY:  Association to one activity @assert.integrity;
      DESCRIPTION: String;
      NOTE: String;
}
