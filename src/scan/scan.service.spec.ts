import { Test, TestingModule } from '@nestjs/testing';
import { ScanService } from './scan.service.js';

describe('ScanService', () => {
  let service: ScanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScanService],
    }).compile();

    service = module.get<ScanService>(ScanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
