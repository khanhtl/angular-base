import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { BaseEntity, PagingRequestDto, PatchEntityDto } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends BaseEntity> {
  protected readonly http = inject(HttpClient);
  protected readonly appConfig=inject(AppConfigService);

  protected readonly apiPath: string;
  constructor(@Inject(String) private controller: string) {
    this.apiPath = `${this.appConfig.apiBaseUrl}/${this.controller}`
  }
  /**
   * GET[/controller]
   * Get all record
   * @returns
   */
  get() {
    return this.http.get<T[]>(this.apiPath);
  }
  /**
   * GET[/controller/:id]
   * Get record by id
   * @param id
   * @returns
   */
  getById(id: string | number) {
    return this.http.get<T>(`${this.apiPath}/${id}`);
  }
  /**
   * POST[/controller/total]
   * Get total record
   * @param pagingRequest
   * @returns
   */
  total(pagingRequest: PagingRequestDto) {
    return this.http.post<number>(`${this.apiPath}/total`, pagingRequest);
  }
  /**
   * POST[/controller/paging]
   * Get data paging
   * @param pagingRequest
   * @returns
   */
  paging(pagingRequest: PagingRequestDto) {
    return this.http.post<number>(`${this.apiPath}/paging`, pagingRequest);
  }
  /**
   * PUT[/controller/:id]
   * Update record
   * @param id
   * @param entity
   * @returns
   */
  update(id: string | number, entity: T) {
    return this.http.put<T>(`${this.apiPath}/${id}`, entity);
  }
  /**
   * PUT[/controller/bulk]
   * Update record
   * @param entities
   * @returns
   */
  bulkUpdate(entities: T[]) {
    return this.http.put<T[]>(`${this.apiPath}/bulk`, entities);
  }
  /**
   * POST[/controller]
   * Create record
   * @param entity
   * @returns
   */
  create(entity: T) {
    return this.http.post<T>(`${this.apiPath}`, entity);
  }
  /**
   * POST[/controller/bulk]
   * Create record
   * @param entities
   * @returns
   */
  bulkCreate(entities: T[]) {
    return this.http.post<T[]>(`${this.apiPath}/bulk`, entities);
  }
  /**
   * DELETE[/controller/:id]
   * Delete one
   * @param id
   */
  delete(id: string | number) {
    return this.http.delete<T>(`${this.apiPath}/${id}`);
  }
  /**
   * DELETE[/controller/bulk]
   * Delete many
   * @param id
   */
  bulkDelete(ids: string[] | number[]) {
    return this.http.delete<T[]>(`${this.apiPath}/bulk`, {
      body: {ids}
    });
  }
  /**
   * PATCH[/controller/:id]
   * Patch a record
   * @param id
   * @param patchEntityDto
   * @returns
   */
  patch(id: string, patchEntityDto: PatchEntityDto) {
    return this.http.patch<T>(`${this.apiPath}/${id}`, patchEntityDto)
  }
  /**
   * PATCH[/controller/bulk]
   * Patch multi record
   * @param patchEntityDtos
   * @returns
   */
  bulkPatch(patchEntityDtos: PatchEntityDto[]) {
    return this.http.patch<T>(`${this.apiPath}/bulk`, patchEntityDtos)
  }
}
