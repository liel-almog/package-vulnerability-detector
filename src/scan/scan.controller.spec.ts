import { Test, TestingModule } from '@nestjs/testing';
import { ScanController } from './scan.controller.js';
import { ScanService } from './scan.service.js';

describe('ScanController', () => {
  let controller: ScanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScanController],
      providers: [ScanService],
    }).compile();

    controller = module.get<ScanController>(ScanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
