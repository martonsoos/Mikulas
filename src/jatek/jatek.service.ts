import { Injectable } from '@nestjs/common';
import { CreateJatekDto } from './dto/create-jatek.dto';
import { UpdateJatekDto } from './dto/update-jatek.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class JatekService {
  constructor(public prisma: PrismaService) {}

  create(createJatekDto: CreateJatekDto) {
    return this.prisma.jatek.create({
      data : {
        nev: createJatekDto.nev,
        anyag: createJatekDto.anyag,
        suly: createJatekDto.suly,
        }
      }
    );
  }
  findAll() {
    return this.prisma.jatek.findMany();
  }

  findOne(id: number) {
    return this.prisma.jatek.findFirst({
      where: {id}
    });
  }


  update(id: number, updateJatekDto: UpdateJatekDto) {
    return this.prisma.jatek.update({
      where: {id},
      data : updateJatekDto
    });
  }

  remove(id: number) {
    return this.prisma.jatek.delete({
      where: {id}
    });
  }
}
