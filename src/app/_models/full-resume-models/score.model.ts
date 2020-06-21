export class ScoreModel {
  score_architectejee: number;
  score_drupal: number;
  score_embedded: number;
  score_po: number;
  score_backend: number;
  score_frontend: number;
  score_fullstackjs: number;
  score_java_jee: number;
  score_phpsymfony: number;


  constructor(score_architectejee: number, score_drupal: number, score_embedded: number, score_po: number, score_backend: number, score_frontend: number, score_fullstackjs: number, score_java_jee: number, score_phpsymfony: number) {
    this.score_architectejee = score_architectejee;
    this.score_drupal = score_drupal;
    this.score_embedded = score_embedded;
    this.score_po = score_po;
    this.score_backend = score_backend;
    this.score_frontend = score_frontend;
    this.score_fullstackjs = score_fullstackjs;
    this.score_java_jee = score_java_jee;
    this.score_phpsymfony = score_phpsymfony;
  }
}
