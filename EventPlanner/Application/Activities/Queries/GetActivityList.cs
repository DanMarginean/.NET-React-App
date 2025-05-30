using System;
using API.Application.Activities.DTOs;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Queries;

public class GetActivityList
{

    public class Query : IRequest<List<ActivityDto>>{}

    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Query, List<ActivityDto>> //, ILogger<GetActivityList> logger
    {
        public async Task<List<ActivityDto>> Handle(Query request, CancellationToken cancellationToken)
        {

            // try
            // {
            //     for (int i = 0; i < 10; i++)
            //     {
            //         cancellationToken.ThrowIfCancellationRequested();
            //         await Task.Delay(1000, cancellationToken);
            //         logger.LogInformation($"Task {i} has completeed");
            //     }
            // }
            // catch (System.Exception)
            // {
            //     logger.LogInformation("Task cancelled");
            //     // throw;
            // }

            // throw new NotImplementedException();
             return await context.Activities
                .ProjectTo<ActivityDto>(mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken);
        }
    }
 
}
