import { Module } from '@nestjs/common';
import { ScanService } from './scan.service.js';
import { ScanController } from './scan.controller.js';

@Module({
  controllers: [ScanController],
  providers: [ScanService],
})
export class ScanModule {}
