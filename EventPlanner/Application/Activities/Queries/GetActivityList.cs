using System;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Queries;

public class GetActivityList
{

    public class Query : IRequest<List<Activity>>{}

    public class Handler(AppDbContext context) : IRequestHandler<Query, List<Activity>> //, ILogger<GetActivityList> logger
    {
        public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
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
             return await context.Activities.ToListAsync(cancellationToken);
        }
    }
 
}
