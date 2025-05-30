using System;
using API.Application.Activities.DTOs;
using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Queries;

public class GetActivityDetails
{
    public class Query : IRequest<Result<ActivityDto>>
    {
        public required string Id { get; set; }
    }

    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Query, Result<ActivityDto>>
    {
        public async Task<Result<ActivityDto>> Handle(Query request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities
                // .Include(x => x.Attendees)
                // .ThenInclude(x => x.User)
                //projection = selecting the needed info so include are no more needed
                .ProjectTo<ActivityDto>(mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(x => request.Id== x.Id,cancellationToken);

            if (activity == null) return Result<ActivityDto>.Failure("Activity not found", 404);
            
            return Result<ActivityDto>.Success(activity);
        }

    }
}
