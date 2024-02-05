using todolist as my from '../db/data-model';

service CatalogService {
    entity Activity        as projection on my.activity;
    entity Activity_Detail as projection on my.activity_detail;
    entity Owner           as projection on my.owner;
}
